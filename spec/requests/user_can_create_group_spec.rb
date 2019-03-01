# frozen_string_literal: true

describe 'POST /groups' do
  let(:user) { create(:user) }

  let(:category) { create(:category) }

  describe 'POST req with valid credentials' do
    let(:user_credentials) { user.create_new_auth_token }
    let(:headers) { { HTTP_ACCEPT: 'application/json' }.merge!(user_credentials) }
    
    before do
      post "/groups", params: { group: {name: 'coding', category_id: category.id } }, headers: headers
    end

    it 'responds with success message' do
      expect(response_json['message']).to eq 'Congratulations, your group has been created!'
    end

    it 'responds with status 200' do
      expect(response).to have_http_status 200
    end
  end

  describe 'POST req with no group name' do
    let(:user_credentials) { user.create_new_auth_token }
    let(:headers) { { HTTP_ACCEPT: 'application/json' }.merge!(user_credentials) }
    
    before do
      post "/groups", params: { group: {name: ''} }, headers: headers
    end

    it 'responds with error message' do
      expect(response_json['error']).to include "Name can't be blank"
    end

    it 'responds with status 400' do
      expect(response).to have_http_status 400
    end
  end

  describe 'POST req with invalid credentials (no user is logged in on the client)' do 
    let(:invalid_headers) { { HTTP_ACCEPT: 'application/json' } }

    before do
      post "/groups", params: { group: {name: 'coding'} }, headers: invalid_headers
    end

    it 'responds with error message' do
      expect(response_json['errors']).to include 'You need to sign in or sign up before continuing.'
    end

    it 'responds with status 401' do
      expect(response).to have_http_status 401
    end

  end
end

