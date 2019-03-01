# frozen_string_literal: true

describe Events::ForGroupCollectionSerializer, type: :serializer do
  let(:sample) { create(:event) }
  let(:serialization) { described_class.new(sample) }
  subject { JSON.parse(serialization.to_json) }

  it 'contains relevant keys' do
    expected_keys = %w[id title date description location]
    expect(subject.keys).to match expected_keys
  end
end
