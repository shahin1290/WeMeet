Group.destroy_all
Event.destroy_all
Category.destroy_all

john = User.create(email: 'john@mail.com', password: 'password', name: 'john')

jane = User.create(email: 'jane@mail.com', password: 'password', name: 'jane')

thomas = User.create(email: 'thomas@mail.com', password: 'password', name: 'thomas')

oliver = User.create(email: 'oliver@mail.com', password: 'password', name: 'oliver')

attendees = [thomas, oliver]

Category.create(name: 'Film')
Category.create(name: 'Music')
Category.create(name: 'Health')
tech = Category.create(name: 'Technology')
Category.create(name: 'Science')
Category.create(name: 'Sports')

craft_academy = Group.create(description: 'This is craft Academy', location: 'stockholm', name: 'Craft Academy', category_id: tech.id, organizer: john)
Group.create(description: 'This is craft Academy', location: 'stockholm', name: 'Ruby on Rails', category_id: tech.id, organizer: jane)
Group.create(description: 'This is craft Academy', location: 'stockholm', name: 'CSS', category_id: tech.id, organizer: thomas)
Group.create(description: 'This is craft Academy', location: 'stockholm', name: 'Front End Fun', category_id: tech.id,organizer: oliver)
Group.create(description: 'This is craft Academy', location: 'stockholm', name: 'Back End Development', category_id: tech.id, organizer: john)
Group.create(description: 'This is craft Academy', location: 'stockholm', name: 'Agile', category_id: tech.id, organizer: oliver)

Event.create(title: 'STHLM TECH Meetup', description: 'All About Technology', location: 'Stockholm', group_id: craft_academy.id, date: '2019-12-12')
Event.create(title: 'Coffee n Code', description: 'All About Technology', location: 'Stockholm', group_id: craft_academy.id, date: '2019-10-12' )
Event.create(title: 'Scrum Fun', description: 'All About Technology', location: 'Stockholm', group_id: craft_academy.id, date: '2018-12-12')
Event.create(title: 'Techie Treckies', description: 'All About Technology', location: 'Gothenburg', group_id: craft_academy.id, date: '2019-12-12' )
Event.create(title: 'Hackathon', description: 'All About Technology', location: 'Linkoping', group_id: craft_academy.id, date: '2019-11-12' )
Event.create(title: 'Code Party', description: 'All About Technology', location: 'Stockholm', group_id: craft_academy.id, date: '2019-12-11')
