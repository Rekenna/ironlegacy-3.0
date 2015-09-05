class ArchiveController < ApplicationController
	layout 'application'
  def index
    @news = News.all
  end
end
