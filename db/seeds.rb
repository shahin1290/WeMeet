Group.destroy_all
Event.destroy_all
Category.destroy_all

john = User.create(email: 'john@mail.com', password: 'password')

jane = User.create(email: 'jane@mail.com', password: 'password')

thomas = User.create(email: 'thomas@mail.com', password: 'password')

oliver = User.create(email: 'oliver@mail.com', password: 'password')

attendees = [thomas, oliver]

Category.create(name: 'Film')
Category.create(name: 'Music')
Category.create(name: 'Health')
tech = Category.create(name: 'Technology')
Category.create(name: 'Science')
Category.create(name: 'Sports')

craft_academy = Group.create(name: 'Craft Academy', category_id: tech.id, organizer: john)
Group.create(name: 'Ruby on Rails', category_id: tech.id, organizer: jane)
Group.create(name: 'CSS', category_id: tech.id, organizer: thomas)
Group.create(name: 'Front End Fun', category_id: tech.id,organizer: oliver)
Group.create(name: 'Back End Development', category_id: tech.id, organizer: john)
Group.create(name: 'Agile', category_id: tech.id, organizer: oliver)

Event.create(title: 'STHLM TECH Meetup', description: 'All About Technology', location: 'Stockholm', group_id: craft_academy.id, date: '2019-12-12')
Event.create(title: 'Coffee n Code', group_id: craft_academy.id)
Event.create(title: 'Scrum Fun', group_id: craft_academy.id)
Event.create(title: 'Techie Treckies', group_id: craft_academy.id)
Event.create(title: 'Hackathon', group_id: craft_academy.id)
Event.create(title: 'Code Party', group_id: craft_academy.id)
