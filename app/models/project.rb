# require 'carrierwave/orm/activerecord'

class Project < ActiveRecord::Base
  attr_accessor :image
  mount_uploader :image, ImageUploader

end
