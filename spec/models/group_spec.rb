# frozen_string_literal: true

RSpec.describe Group, type: :model do
  describe 'DB table' do
    it { is_expected.to have_db_column :name }
    it { is_expected.to have_db_column :description }
    it { is_expected.to have_db_column :location }
  end

  describe 'Validations' do
    it { is_expected.to validate_presence_of :name }
    it { is_expected.to validate_presence_of :description }
    it { is_expected.to validate_presence_of :location }
  end

  describe 'Associations' do
    it { is_expected.to have_many :members }
    it { is_expected.to have_many :events }
  end

  describe 'Factory' do
    it 'is valid' do
      expect(create(:group)).to be_valid
    end
  end

  describe 'Scopes' do
    let!(:not_subject) { create(:group) }
    subject { create(:group) }

    let!(:events) do
      3.times { create(:event, group: subject, date: 1.day.from_now) }
      3.times { create(:event, group: subject, date: 1.day.ago) }
      3.times { create(:event, group: not_subject, date: 1.day.from_now) }
      3.times { create(:event, group: not_subject, date: 1.day.ago) }
    end

    it '#events lists events belonging to the group' do
      ids_list = subject.events.map(&:group_id)
      expect(ids_list).not_to include not_subject.id
    end

    it '#past_events lists events belonging to the group' do
      ids_list = subject.past_events.map(&:group_id)
      expect(ids_list).not_to include not_subject.id
    end

    it '#future_events lists events belonging to the group' do
      ids_list = subject.future_events.map(&:group_id)
      expect(ids_list).not_to include not_subject.id
    end
  end
end
