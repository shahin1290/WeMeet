# frozen_string_literal: true

describe Groups::ShowSerializer, type: :serializer do
  let(:sample) { create(:group) }
  let!(:events) do
    3.times { create(:event, group: sample, date: 1.day.from_now) }
    3.times { create(:event, group: sample, date: 1.day.ago) }
  end
  let(:serialization) { described_class.new(sample) }
  subject { JSON.parse(serialization.to_json) }

  it 'contains relevant keys' do
    expected_keys = %w[id name members organizer future_events past_events]
    expect(subject.keys).to match expected_keys
  end
end
