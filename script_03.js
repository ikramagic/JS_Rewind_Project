// Assuming a list of users with revenue information
const users = [
    { name: 'User1', revenue: 1500, country: 'France', gender: 'Male' },
    { name: 'User2', revenue: 0, country: 'Germany', gender: 'Female' },
    // ... and so on
  ];
  
  // Question 1
  const averageRevenuePerUser = users.reduce((totalRevenue, user) => totalRevenue + user.revenue, 0) / users.length;
  console.log(`Average revenue per user: ${averageRevenuePerUser} cents`);
  
  // Question 2
  const usersWithRevenue = users.filter(user => user.revenue > 0);
  const percentageWithRevenue = (usersWithRevenue.length / users.length) * 100;
  console.log(`Percentage of users with revenue: ${percentageWithRevenue}%`);
  
  // Question 3
  const averageRevenueWithRevenue = usersWithRevenue.reduce((totalRevenue, user) => totalRevenue + user.revenue, 0) / usersWithRevenue.length;
  console.log(`Average revenue per user with revenue: ${averageRevenueWithRevenue} cents`);
  
  // Question 4
  const totalRevenue = users.reduce((totalRevenue, user) => totalRevenue + user.revenue, 0);
  console.log(`Total revenue: ${totalRevenue} cents`);
  
  // Question 5
  const usersInFrance = users.filter(user => user.country === 'France');
  console.log(`Number of users in France: ${usersInFrance.length}`);
  
  // Question 6
  const payingUsersInFrance = usersInFrance.filter(user => user.revenue > 0);
  console.log(`Number of paying users in France: ${payingUsersInFrance.length}`);
  
  // Question 7
  const topCountries = ['Germany', 'United States', 'France', 'Great Britain'];
  const revenueByCountry = topCountries.reduce((revenueByCountry, country) => {
    revenueByCountry[country] = users.filter(user => user.country === country).reduce((totalRevenue, user) => totalRevenue + user.revenue, 0);
    return revenueByCountry;
  }, {});
  
  console.log('Revenue by country:', revenueByCountry);
  
  // Question 8
  const uniqueCountries = [...new Set(users.map(user => user.country))];
  console.log('Countries where we made money:', uniqueCountries);
  
  // Question 9
  const top5UsersByRevenue = users.sort((a, b) => b.revenue - a.revenue).slice(0, 5);
  console.log('Top 5 users by revenue:', top5UsersByRevenue);
  
  // Question 10
  const revenueByGender = users.reduce((revenueByGender, user) => {
    revenueByGender[user.gender] = (revenueByGender[user.gender] || 0) + user.revenue;
    return revenueByGender;
  }, {});
  
  console.log('Revenue by gender:', revenueByGender);
  
  // Question 11
  const usersWithAtLeast75Revenue = users.filter(user => user.revenue >= 75);
  console.log('Users with at least 75 cents revenue:', usersWithAtLeast75Revenue);
  
  // Question 12
  const first100UsersPercentagePaying = (users.slice(0, 100).filter(user => user.revenue > 0).length / 100) * 100;
  console.log(`Percentage of paying users among the first 100 users: ${first100UsersPercentagePaying}%`);
  