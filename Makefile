SITE = gridlock.gay

sync:
	-rsync -av . vps:/home/sammi/www/$(SITE)
