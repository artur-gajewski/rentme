const data = [
  {
    "id": "08fa1f2d-5fea-4da1-b2bc-edf1b69b3e6e",
    "type": "House",
    "price": "$1,936",
    "size": 101,
    "rating": 4,
    "location": "Vista Hermosa",
    "image": "https://images.unsplash.com/photo-1525896544042-354764aa27e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bb22e6f49db10bc0c0c8efda661a1349&auto=format&fit=crop&w=668&q=80"
  },
  {
    "id": "6b3adc07-01ff-40ec-8e38-057bd0a57829",
    "type": "Flat",
    "price": "$8,601",
    "size": 60,
    "rating": 1,
    "location": "Shchëkino",
    "image": "https://images.unsplash.com/photo-1464890100898-a385f744067f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7d72ed8a68b99c744adfcaf621d3e255&auto=format&fit=crop&w=1650&q=80"
  },
  {
    "id": "7512cb09-2184-4f8e-8729-a27bed0c7771",
    "type": "Flat",
    "price": "$2,218",
    "size": 65,
    "rating": 1,
    "location": "Guimbal",
    "image": "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5a01717a33db39cbdabd468904b61d22&auto=format&fit=crop&w=1653&q=80"
  },
  {
    "id": "c1381689-8c6e-4cb0-9793-bf4b0f2d1fb4",
    "type": "House",
    "price": "$3,854",
    "size": 145,
    "rating": 4,
    "location": "Chuanxi",
    "image": "https://images.unsplash.com/photo-1521782462922-9318be1cfd04?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5631d58afa6fa483935e464b52248995&auto=format&fit=crop&w=1655&q=80"
  },
  {
    "id": "212d66ee-c575-4933-bdad-507027190e8b",
    "type": "Flat",
    "price": "$8,559",
    "size": 57,
    "rating": 5,
    "location": "Molugan",
    "image": "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5d9a8b5b8351092b69cf2f4ab00c9a47&auto=format&fit=crop&w=660&q=80"
  },
  {
    "id": "7e5a9fa2-beed-4f4b-a3cb-f434c362eef1",
    "type": "Flat",
    "price": "$1,642",
    "size": 88,
    "rating": 4,
    "location": "Brusy",
    "image": "https://images.unsplash.com/photo-1521782462922-9318be1cfd04?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5631d58afa6fa483935e464b52248995&auto=format&fit=crop&w=1655&q=80"
  },
  {
    "id": "758c3043-5470-435f-9cf3-a8b901aa0867",
    "type": "House",
    "price": "$5,728",
    "size": 163,
    "rating": 4,
    "location": "Ubrub",
    "image": "https://images.unsplash.com/photo-1525896544042-354764aa27e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bb22e6f49db10bc0c0c8efda661a1349&auto=format&fit=crop&w=668&q=80"
  },
  {
    "id": "4eec3602-0169-4aeb-b808-97c0cf04ceca",
    "type": "Room",
    "price": "$6,559",
    "size": 29,
    "rating": 4,
    "location": "Chenxiang",
    "image": "https://images.unsplash.com/photo-1521782462922-9318be1cfd04?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5631d58afa6fa483935e464b52248995&auto=format&fit=crop&w=1655&q=80"
  },
  {
    "id": "f5fef82c-a653-49db-b65f-6f158eae716c",
    "type": "Office",
    "price": "$1,250",
    "size": 35,
    "rating": 4,
    "location": "Caridade",
    "image": "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5a01717a33db39cbdabd468904b61d22&auto=format&fit=crop&w=1653&q=80"
  },
  {
    "id": "ea3c74b3-2ba5-47a7-b079-b9a4570e7815",
    "type": "Flat",
    "price": "$871",
    "size": 33,
    "rating": 1,
    "location": "Kavála",
    "image": "https://images.unsplash.com/photo-1521782462922-9318be1cfd04?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5631d58afa6fa483935e464b52248995&auto=format&fit=crop&w=1655&q=80"
  },
  {
    "id": "3add2dd9-49be-41bb-bb93-920ba0cc43f2",
    "type": "House",
    "price": "$2,126",
    "size": 179,
    "rating": 4,
    "location": "Nanaimo",
    "image": "https://images.unsplash.com/photo-1525896544042-354764aa27e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bb22e6f49db10bc0c0c8efda661a1349&auto=format&fit=crop&w=668&q=80"
  },
  {
    "id": "3f9830e9-4363-4499-8480-8c7cea8beacf",
    "type": "House",
    "price": "$8,031",
    "size": 122,
    "rating": 4,
    "location": "Khisarya",
    "image": "https://images.unsplash.com/photo-1519643225200-94e79e383724?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=57a962be8447ae8fbea351abe9262275&auto=format&fit=crop&w=1655&q=80"
  },
  {
    "id": "cf78f91b-b4f8-4139-b8af-dc0af9b5fd85",
    "type": "Room",
    "price": "$3,123",
    "size": 23,
    "rating": 2,
    "location": "Tarnowskie Góry",
    "image": "https://images.unsplash.com/photo-1518012312832-96aea3c91144?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dc3e48b8b0e66d91fa42332888e1d4e4&auto=format&fit=crop&w=668&q=80"
  },
  {
    "id": "8540f95f-9fe9-49ef-940d-96dd641eb317",
    "type": "Office",
    "price": "$4,814",
    "size": 117,
    "rating": 5,
    "location": "Chichinales",
    "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ee7b83f80f90879486ced1b45501ce21&auto=format&fit=crop&w=1649&q=80"
  },
  {
    "id": "407126b0-7607-4676-91cf-ef314998f027",
    "type": "Flat",
    "price": "$1,437",
    "size": 181,
    "rating": 2,
    "location": "Samut Prakan",
    "image": "https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f413419441319fa33a2409150be91aca&auto=format&fit=crop&w=668&q=80"
  },
  {
    "id": "e3c4254e-cb60-4182-badb-2130f0cc61cb",
    "type": "Office",
    "price": "$7,138",
    "size": 128,
    "rating": 3,
    "location": "Warmbaths",
    "image": "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5a01717a33db39cbdabd468904b61d22&auto=format&fit=crop&w=1653&q=80"
  },
  {
    "id": "3a019930-a704-4ef6-91b9-6897caae1510",
    "type": "Office",
    "price": "$950",
    "size": 79,
    "rating": 1,
    "location": "Jinrongjie",
    "image": "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5a01717a33db39cbdabd468904b61d22&auto=format&fit=crop&w=1653&q=80"
  },
  {
    "id": "319d88bf-967f-4842-a690-34895308104c",
    "type": "Room",
    "price": "$1,669",
    "size": 15,
    "rating": 2,
    "location": "Herong",
    "image": "https://images.unsplash.com/photo-1501876725168-00c445821c9e?ixlib=rb-0.3.5&s=9efc7d09437780e1629ffdc581c84679&auto=format&fit=crop&w=1650&q=80"
  },
  {
    "id": "f3f9f277-2d24-4494-af07-ad6248ddc79c",
    "type": "Room",
    "price": "$3,939",
    "size": 79,
    "rating": 3,
    "location": "Tulsa",
    "image": "https://images.unsplash.com/photo-1501877008226-4fca48ee50c1?ixlib=rb-0.3.5&s=271e79f3442492ce8f1eaa13d8fde8eb&auto=format&fit=crop&w=1650&q=80"
  },
  {
    "id": "047afb64-dff6-4360-825c-235ac109b5ed",
    "type": "House",
    "price": "$1,488",
    "size": 171,
    "rating": 1,
    "location": "København",
    "image": "https://images.unsplash.com/photo-1464890100898-a385f744067f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7d72ed8a68b99c744adfcaf621d3e255&auto=format&fit=crop&w=1650&q=80"
  }
];

export default data;

