class CreateUsers < ActiveRecord::Migration[5.0]
	def change

	  create_table :users do |t|
	    t.string :email, 						null: false
	    t.string :session_token, 		null: false
	    t.string :password_digest,	null: false
	  	t.string :first_name, 			null: false
	  	t.string :last_name, 				null: false
	  	t.string :language, 				null: false, default: "en"
	    t.string :about, 						null: false
	  end

	end
end