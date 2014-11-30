class ArchiveController < ApplicationController
  def index
    @news = News.all
  end
end
