desc "Make widget"
task :make_widget do
	puts "Creating zipped widget.."
	`rm -rf PasswordGenerator.wdgt` if File.exists?('PasswordGenerator.wdgt')
	`rm -rf PasswordGenerator.wdgt.zip` if File.exists?('PasswordGenerator.wdgt.zip')
	`cp -R PasswordGenerator PasswordGenerator.wdgt`
	`zip PasswordGenerator.wdgt.zip PasswordGenerator.wdgt`
	`rm -rf PasswordGenerator.wdgt`
	puts "Done!"
end