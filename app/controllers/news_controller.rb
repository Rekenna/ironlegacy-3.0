class NewsController < ApplicationController
  before_action :set_news, only: [:show, :edit, :update, :destroy]
  before_filter :verify_is_admin, :only => [:new, :edit, :create, :destroy]
  layout 'forum'
  # GET /news
  # GET /news.json
  def index
    @news = News.all
    render layout: 'home'
  end

  # GET /news/1
  # GET /news/1.json
  def show
  end

  def sidebar
    require 'open-uri'
    require 'json'

    @number = 1

    @result = JSON.parse(open("https://us.api.battle.net/wow/character/emerald-dream/valoryn?locale=en_US&apikey=xw8zayxzw357jbuhzje3ydmusjqppbzw").read)
    puts @result

    roster = JSON.parse(open("https://us.api.battle.net/wow/guild/sargeras/Armored%20Bear%20Division?fields=members&locale=en_US&apikey=xw8zayxzw357jbuhzje3ydmusjqppbzw").read)
    guildroster = []
    roster['members'].each do |i|
        guildroster.append(i["character"]["name"])
    end
    @guildroster = guildroster.sort_by{|name| name.downcase}
    puts @result["thumbnail"]
    puts thumbnail = @result["thumbnail"].sub('-avatar.jpg','-profilemain.jpg')
  end

  # GET /news/new
  def new
    @news = News.new
  end

  # GET /news/1/edit
  def edit
  end

  # POST /news
  # POST /news.json
  def create
    @news = News.new(news_params)

    respond_to do |format|
      if @news.save
        format.html { redirect_to @news, notice: 'News was successfully created.' }
        format.json { render :show, status: :created, location: @news }
      else
        format.html { render :new }
        format.json { render json: @news.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /news/1
  # PATCH/PUT /news/1.json
  def update
    respond_to do |format|
      if @news.update(news_params)
        format.html { redirect_to @news, notice: 'News was successfully updated.' }
        format.json { render :show, status: :ok, location: @news }
      else
        format.html { render :edit }
        format.json { render json: @news.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /news/1
  # DELETE /news/1.json
  def destroy
    @news.destroy
    respond_to do |format|
      format.html { redirect_to news_index_url, notice: 'News was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_news
      @news = News.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def news_params
      params.require(:news).permit(:title, :image_embed, :youtube_embed, :content)
    end

    def verify_is_admin
      (current_user.nil?) ? redirect_to(root_path) : (redirect_to(root_path) unless current_user.admin?)
    end
end
