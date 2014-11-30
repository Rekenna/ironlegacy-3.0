class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  attr_accessor :login
  
  def forem_name
    username
  end

  def forem_avater
    avatar
  end

  def forem_admin?
    admin
  end

  def forem_email
    email
  end

  def self.find_for_database_authentication(warden_conditions)
      conditions = warden_conditions.dup
  	if login = conditions.delete(:login)
        where(conditions).where(["lower(username) = :value OR lower(email) = :value", { :value => login.downcase }]).first
  	else
        where(conditions).first
      end
    end


  has_attached_file :avatar, :styles => { :medium => "300x300>", :thumb => "100x100#" }, :default_url => "/images/defaultuser.png"
  validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/
end
