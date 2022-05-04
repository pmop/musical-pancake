class PostalCodesController < ApplicationController
  def search_cities
    results = PostalCodeCity.where(postal_number: search_cities_params[:postal_code])
    results = results.distinct

    respond_to do |format|
      format.json { render json: results }
    end
  end

  private

  def search_cities_params
    params.permit(:postal_code)
  end
end
