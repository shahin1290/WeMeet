describe 'POST /events' do
  let(:user) { create(:user) }
  let!(:group) { create(:group) } 

  describe 'POST req with valid credentials' do
    let(:user_credentials) { user.create_new_auth_token }
    let(:headers) { { HTTP_ACCEPT: 'application/json' }.merge!(user_credentials) }
    
    before do
      post "/groups/#{group.id}/events", params: { event:
        { title: 'Craft Academy',
          description: 'Graduation Party',
          location: 'Stockholm',
          date: '2019-12-12',
          time: '12:12' } },headers: headers
      @last_event = Event.last
    end

    it 'responds with success message' do
      expect(response_json['message']).to eq 'You have successfully created an event'
    end

    it 'responds with status 200' do
      expect(response).to have_http_status 200
    end

    it 'stores the title' do
      expect(@last_event.title).to eq 'Craft Academy'
    end

     it 'stores the description' do
      expect(@last_event.description).to eq 'Graduation Party'
    end

     it 'assigns event to the right group' do
      expect(@last_event.group).to eq group
    end

  end

  describe 'POST req with no event title' do
    let(:user_credentials) { user.create_new_auth_token }
    let(:headers) { { HTTP_ACCEPT: 'application/json' }.merge!(user_credentials) }
    
    before do
      post "/groups/#{group.id}/events", params: { event: { title: '' } }, headers: headers
    end

    it 'responds with error message' do
      expect(response_json['error']).to include "Title can't be blank"
    end

  end
end