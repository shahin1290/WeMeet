class CategoriesController < ApplicationController
  def index
    categories = Category.all
    render json: categories, each_serializer: Categories::IndexSerializer
  end

  # This one is not needed ATM
  def show
    category = Category.find(params[:id])
    render json: category, serializer: Categories::ShowSerializer
  end
end
