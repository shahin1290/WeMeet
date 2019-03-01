class CategoriesController < ApplicationController
  def index
    categories = Category.all
    render json: categories
  end

  def show
    category = Category.find(params[:id])
    groups = category.groups
    render json: groups
  end
end
