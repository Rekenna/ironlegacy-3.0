class SidebarController < ApplicationController
 
	@topics = Forem::Topic

	respond_to do |format|
		format.html
		end
end
