require "rails_helper"

RSpec.describe FormDataController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/form_data").to route_to("form_data#index")
    end

    it "routes to #new" do
      expect(get: "/form_data/new").to route_to("form_data#new")
    end

    it "routes to #show" do
      expect(get: "/form_data/1").to route_to("form_data#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/form_data/1/edit").to route_to("form_data#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/form_data").to route_to("form_data#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/form_data/1").to route_to("form_data#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/form_data/1").to route_to("form_data#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/form_data/1").to route_to("form_data#destroy", id: "1")
    end
  end
end
