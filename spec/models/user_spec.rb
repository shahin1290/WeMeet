# frozen_string_literal: true

describe User, type: :model do

  describe 'DB table' do
    it { is_expected.to have_db_column :id }
    it { is_expected.to have_db_column :name }
    it { is_expected.to have_db_column :email }
    it { is_expected.to have_db_column :encrypted_password }
    it { is_expected.to have_db_column :provider }
  end


  describe 'Associations' do
    it { is_expected.to have_many :rsvps }
    it { is_expected.to have_many :memberships }
    it { is_expected.to have_many(:groups).through(:memberships) }
  end

  describe 'Factory' do
    it 'is valid' do
      expect(create(:user)).to be_valid
    end
  end
end
