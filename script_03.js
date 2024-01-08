// Assuming a list of users with revenue information
const users = [
    { name: 'User1', revenue: 1500, country: 'France', gender: 'Male' },
    { name: 'User2', revenue: 0, country: 'Germany', gender: 'Female' },
    // ... and so on
  ];
  
  // Question 1
  const averageRevenuePerUser = users.reduce((totalRevenue, user) => totalRevenue + user.revenue, 0) / users.length;
  console.log(`Average revenue per user: ${averageRevenuePerUser} cents`);
  