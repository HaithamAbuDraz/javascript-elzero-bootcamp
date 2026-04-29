/*
Assignment 03
Convert the previous JSON Object to a JavaScript Object and store the data in a variable named mainData.
Loop all articles and change the articles section to a section named All.
Print the contents of the mainData variable in the console after updating.
Convert the JavaScript Object after performing the above steps to a JSON Object and store it in a variable named updatedData.
Print the contents of the UpdatedData variable in the console.
*/

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "./articles.json", true);
myRequest.send();

myRequest.onreadystatechange = function () {
  if (this.status === 200 && this.readyState === 4) {
    let mainData = JSON.parse(this.response);
    console.log(mainData);
    /*
    0: {id: 1, author: 'Sarah Johnson', section: 'Technology', title: 'The Rise of Artificial Intelligence in Modern Computing', content: 'Artificial intelligence has transformed the way we…ing increasingly integrated into our daily lives.'}
    1: {id: 2, author: 'Michael Chen', section: 'Health & Wellness', title: 'Understanding the Benefits of Mindful Meditation', content: 'Recent studies have shown that regular meditation …itation can positively impact your mental health.'}
    2: {id: 3, author: 'Emma Rodriguez', section: 'Environment', title: 'Climate Change: Small Actions, Big Impact', content: 'While climate change remains a global challenge, i…her to protect our planet for future generations.'}
    3: {id: 4, author: 'David Kim', section: 'Business', title: 'Remote Work: The Future of Corporate Culture', content: 'The pandemic accelerated the shift toward remote w…make remote collaboration seamless and effective.'}
    4: {id: 5, author: 'Lisa Thompson', section: 'Education', title: 'Digital Literacy Skills Every Student Needs', content: 'In an increasingly connected world, digital litera…e next generation for success in the digital age.'}
    */
    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);
    /*
    [
    {"id":1,"author":"Sarah Johnson","section":"Technology","title":"The Rise of Artificial Intelligence in Modern Computing","content":"Artificial intelligence has transformed the way we interact with computers. From voice assistants to autonomous vehicles, AI is reshaping industries worldwide. This article explores the latest developments in machine learning and neural networks, highlighting how these technologies are becoming increasingly integrated into our daily lives."},
    {"id":2,"author":"Michael Chen","section":"Health & Wellness","title":"Understanding the Benefits of Mindful Meditation","content":"Recent studies have shown that regular meditation practice can reduce stress, improve focus, and enhance overall well-being. This comprehensive guide provides beginners with practical techniques to start their mindfulness journey. Learn how just 10 minutes of daily meditation can positively impact your mental health."},
    {"id":3,"author":"Emma Rodriguez","section":"Environment","title":"Climate Change: Small Actions, Big Impact","content":"While climate change remains a global challenge, individual actions collectively make a significant difference. This article discusses practical steps everyone can take to reduce their carbon footprint, from reducing plastic usage to supporting sustainable products. Discover how communities are coming together to protect our planet for future generations."},
    {"id":4,"author":"David Kim","section":"Business","title":"Remote Work: The Future of Corporate Culture","content":"The pandemic accelerated the shift toward remote work, and many companies are now embracing hybrid models permanently. This article examines the benefits and challenges of distributed teams, including productivity metrics, employee satisfaction, and technological solutions that make remote collaboration seamless and effective."},
    {"id":5,"author":"Lisa Thompson","section":"Education","title":"Digital Literacy Skills Every Student Needs","content":"In an increasingly connected world, digital literacy has become as essential as reading and writing. This article outlines the key technological competencies students should develop, including online research skills, data privacy awareness, and effective communication through digital platforms. Prepare the next generation for success in the digital age."}
    ]
    */
  }
}
