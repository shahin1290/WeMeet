# frozen_string_literal: true

describe Events::IndexSerializer, type: :serializer do
  let(:sample) { create(:event) }
  let(:serialization) { described_class.new(sample) }
  subject { JSON.parse(serialization.to_json) }

  it 'contains relevant keys' do
    expected_keys = %w[id title time description location date group]
    expect(subject.keys).to match expected_keys
  end
end
