document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.serviceLink').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default action of the link
            
            const service = this.getAttribute('data-service'); // Get the service identifier
            const detailsPlaceholder = document.getElementById('serviceDetails'); // Ensure this ID matches your HTML placeholder

            // Define the content for each service
            let detailsContent = '';
            switch(service) {
                case 'frenchHorn':
                    detailsContent = `
                      <div style="text-align: center; margin-bottom: 10px;">
                        <p style="margin: 5px 0;"><strong>Lesson Pricing:</strong></p>
                        <p style="margin: 5px 0;">$30 for 30 minutes</p>
                        <p style="margin: 5px 0;">$45 for 45 minutes</p>
                        <p style="margin: 5px 0;">$60 for an hour</p>
                      </div>
                      <p>Students will receive personalized instruction tailored to their needs, suitable for both beginners and more advanced players. Our lessons cover essential aspects such as proper posture, hand positioning, embouchure, intonation, and air support. They are structured to progress at the student's own pace, targeting their individual goals. As the instructor, I commit to providing personalized guidance within a positive and inclusive learning environment. Lessons are taught through live video sessions for demonstrations, explanations, and Q&A. We also engage in discussions on musical interpretation and practice strategies. No previous experience is required, as each session adapts to the learner's current skill level.</p>
                    `;
                    break;                  
                    case 'trumpet':
                        detailsContent = `
                          <div style="text-align: center; margin-bottom: 10px;">
                            <p style="margin: 5px 0;"><strong>Lesson Pricing:</strong></p>
                            <p style="margin: 5px 0;">$30 for 30 minutes</p>
                            <p style="margin: 5px 0;">$45 for 45 minutes</p>
                            <p style="margin: 5px 0;">$60 for an hour</p>
                          </div>
                          <p>Students will receive personalized instruction tailored to their unique needs, suitable for both beginners and more advanced players. Our lessons cover essential aspects such as proper posture, embouchure, intonation, and air support. They are structured to progress at the student's own pace, targeting their individual goals. As the instructor, I commit to providing personalized guidance within a positive and inclusive learning environment. Lessons are taught through live video sessions for demonstrations, explanations, and Q&A. We also engage in discussions on musical interpretation and practice strategies. No previous experience is required, as each session adapts to the learner's current skill level.</p>
                        `;
                        break;
                    case 'voice2':
                        detailsContent = `
                            <div style="text-align: center; margin-bottom: 10px;">
                            <p style="margin: 5px 0;"><strong>Lesson Pricing:</strong></p>
                            <p style="margin: 3px 0; font-size: smaller;"><i>Null</i></p>
                            <p style="margin: 3px 0; font-size: smaller;"><i>Null</i></p>
                            <p style="margin: 5px 0;">$30 for 30 minutes</p>
                            <p style="margin: 5px 0;">$45 for 45 minutes</p>
                            <p style="margin: 5px 0;">$60 for an hour</p>
                            </div>
                            <p>Null</p>
                         `;
                        break;
                        case 'voice':
                            detailsContent = `
                                <div style="text-align: center; margin-bottom: 10px;">
                                <p style="margin: 5px 0;"><strong>Lesson Pricing:</strong></p>
                                <p style="margin: 5px 0;">$30 for 30 minutes</p>
                                <p style="margin: 5px 0;">$45 for 45 minutes</p>
                                <p style="margin: 5px 0;">$60 for an hour</p>
                                </div>
                                <p>Service details will be available soon.</p>
                            `;
                            break;
                    case 'musicTheory':
                        detailsContent = `
                            <div style="text-align: center; margin-bottom: 10px;">
                            <p style="margin: 5px 0;"><strong>Lesson Pricing:</strong></p>
                            <p style="margin: 5px 0;">$30 for 30 minutes</p>
                            <p style="margin: 5px 0;">$45 for 45 minutes</p>
                            <p style="margin: 5px 0;">$60 for an hour</p>
                            </div>
                            <p>Ready to understand the language behind the music you love? These music theory lessons will take you from the basics of notes and rhythm to how chords work together to build the structure of a song. You'll learn to read and write music, train your ear to pick out melodies and harmonies, and analyze your favorite pieces. Whether you're a player, composer, or simply a music enthusiast, this course will equip you with the knowledge to deepen your appreciation and enjoyment of music. Lessons are taught through interactive live video sessions for demonstrations, explanations, and Q&A. We also engage in discussions on musical interpretation and practice strategies. No previous experience is required, as each session adapts to the learner's current skill level.</p>
                        `;
                        break;
                    case 'musicProduction':
                        detailsContent = `
                            <div style="text-align: center; margin-bottom: 10px;">
                             <p style="margin: 5px 0;"><strong>Lesson Pricing:</strong></p>
                             <p style="margin: 5px 0;">$30 for 30 minutes</p>
                             <p style="margin: 5px 0;">$45 for 45 minutes</p>
                             <p style="margin: 5px 0;">$60 for an hour</p>
                             </div>
                             <p>Wanting to enter the audio industry, or develop your skills? Using FL Studio or Cubase, I'll teach you all you'll need to know about how to create engaging music in your favorite genre. Lessons are taught through one-on-one video meetings, where discussion and teaching can happen at your own pace. Whether you're brand new or an experienced producer, I'm certain you'll finish these lessons with a bolstered confidence in your skills.</p>
                        `;
                        break;
                    case 'customProduction':
                        detailsContent = `
                            <div style="text-align: center; margin-bottom: 10px;">
                            <p style="margin: 5px 0;"><strong>70 dollars per minute of music</strong></p>
                            </div>
                            <p>Needing some music professionally made? I offer comprehensive audio work across several genres such as soundtracks, pop, singer-songwriter, and orchestral. Whether you're developing a game or an artist wanting to bring your music to life, I'll translate your ideas into music that you'll love. At this time as I work to expand my portfolio, I'm offering a heavily discounted price of 70 dollars per minute of music. Let's collaborate and make your music a reality!</p>
                        `;
                        break;

                          
            }

            // Update the inner HTML of the placeholder
            detailsPlaceholder.innerHTML = detailsContent;
        });
    });
});

// document.addEventListener('DOMContentLoaded', function () {
//   // Select all Read More buttons
//   var readMoreBtns = document.querySelectorAll('.read-more');
  
//   // Function to toggle Read More/Less
//   function toggleReadMore(event) {
//     var btn = event.target; // The clicked button
//     var testimonialItem = btn.closest('.testimonial-item'); // Find the closest parent testimonial item
//     var moreText = testimonialItem.querySelector('.more-text'); // Select the more-text element within the same testimonial item

//     // Toggle the display of moreText and button text
//     if (btn.textContent.includes("Read More")) {
//       moreText.style.display = "block";
//       btn.textContent = "Read Less";
//     } else {
//       moreText.style.display = "none";
//       btn.textContent = "Read More";
//     }
//   }
  
//   // Add click event listener for each Read More button
//   readMoreBtns.forEach(function(btn) {
//     btn.addEventListener('click', toggleReadMore);
//   });
// });




