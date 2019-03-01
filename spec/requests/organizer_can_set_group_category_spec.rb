# frozen_string_literal: true

describe 'GET /categories/:id' do
  let!(:category_1) { create(:category) } 
  let!(:category_2) { create(:category) } 

  let!(:group) do 
    3.times { create(:group, category: category_1) }
    3.times { create(:group, category: category_2) }
  end

  before do
    get "/categories", headers: headers
  end

  it 'lists groups belonging to the categories' do
    ids_list = category_1.groups.map(&:category_id)
    expect(ids_list).not_to include category_2.id
  end

  it 'returns 200' do
    expect(response).to have_http_status(200)
  end

  it 'returns 2 categories' do
    expect(response_json['categories'].count).to eq 2
  end
end