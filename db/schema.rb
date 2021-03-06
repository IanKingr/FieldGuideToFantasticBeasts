# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160503071821) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "beasts", force: :cascade do |t|
    t.string   "name",                                                                                                                           null: false
    t.text     "description",                                                                                                                    null: false
    t.integer  "author_id",                                                                                                                      null: false
    t.integer  "avg_height"
    t.integer  "avg_weight"
    t.integer  "avg_length"
    t.integer  "affinity_id",                                                                                                                    null: false
    t.datetime "created_at",                                                                                                                     null: false
    t.datetime "updated_at",                                                                                                                     null: false
    t.string   "image_url",   default: "http://res.cloudinary.com/flyingonclouds/image/upload/v1462475866/orc_warrior_blackandwhite_p8rox8.png"
  end

  add_index "beasts", ["author_id", "affinity_id"], name: "index_beasts_on_author_id_and_affinity_id", using: :btree
  add_index "beasts", ["name"], name: "index_beasts_on_name", unique: true, using: :btree

  create_table "bookmarks", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "beast_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "bookmarks", ["user_id", "beast_id"], name: "index_bookmarks_on_user_id_and_beast_id", using: :btree

  create_table "likes", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "beast_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "likes", ["beast_id"], name: "index_likes_on_beast_id", using: :btree
  add_index "likes", ["user_id", "beast_id"], name: "index_likes_on_user_id_and_beast_id", unique: true, using: :btree
  add_index "likes", ["user_id"], name: "index_likes_on_user_id", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "beast_id",    null: false
    t.integer  "rating",      null: false
    t.text     "description", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "reviews", ["beast_id"], name: "index_reviews_on_beast_id", using: :btree
  add_index "reviews", ["user_id", "beast_id"], name: "index_reviews_on_user_id_and_beast_id", unique: true, using: :btree
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
