Rails.application.routes.draw do
  resources :form_data
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #
  get '/streets/search/', to: 'streets#search', as: 'street'
  get '/postal-codes/:postal_code/cities/', to: 'postal_codes#search_cities', as: 'postal_code_city'
end
