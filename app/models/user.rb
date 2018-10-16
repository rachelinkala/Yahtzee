# frozen_string_literal: true

class User < ActiveRecord::Base
  has_many :scores
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User
end
