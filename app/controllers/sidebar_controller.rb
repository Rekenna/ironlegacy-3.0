class SidebarController < ApplicationController

	def show
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
end
