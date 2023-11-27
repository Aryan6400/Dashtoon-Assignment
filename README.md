<span style="font-size: larger;">**DashToon Comic Creator** </span>

Create and share your own 10-panel comic strips with DashToon! This web application allows users to effortlessly generate comic strips by inputting text into a form. The magic happens behind the scenes as the text is sent to a text-to-image API using a provided API key, resulting in a visually appealing comic strip.

Features:

User-Friendly UI: 
DashToon boasts a user-friendly interface developed with React.js and Material UI. Leveraging React.js transforms the application into a seamless single-page experience. The use of states and context ensures a smooth theme toggle, while react-router-dom facilitates easy navigation.

Responsive Design: 
No matter the device, DashToon provides a delightful experience with its responsive design. Media queries and Material UI contribute to a layout that adapts gracefully to various screen sizes, ensuring users can create comics on the go.

Image Handling: 
Generated blob images take center stage in a responsive panel, organized in the order of their creation. This thoughtful design not only showcases the creativity of users but also enhances the overall aesthetic appeal of the comic strip.

Error Handling: 
DashToon prioritizes a smooth user experience by handling HTTP errors effectively. Users are guided through potential issues with informative alerts and dedicated error pages. Specific alerts and error pages are tailored to different error types, ensuring clarity and ease of troubleshooting.

Rate Limiting: 
To maintain a fair and secure environment, DashToon incorporates rate limiting. Users are restricted from exceeding a set number of API calls, with the rate of requests capped at 3 per minute. This feature is implemented using local storage, contributing to a well-balanced user experience.
