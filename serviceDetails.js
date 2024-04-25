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
                      <p>Students will receive personalized instruction tailored to their unique needs, suitable for both beginners and advanced players. Our lessons cover essential aspects such as proper posture, hand positioning, embouchure, intonation, and air support. They are structured to progress at the student's own pace, targeting their individual goals. As the instructor, I commit to providing customized guidance and feedback. This approach aims to enhance technique, musicality, and performance within a supportive and positive learning environment. Lessons include interactive live video sessions for demonstrations, explanations, and Q&A. We also engage in discussions on musical interpretation and practice strategies, enriching the learning experience. No previous experience is required, as each session adapts to the learner's current skill level.</p>
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
                          <p>Students will receive personalized instruction tailored to their unique needs, suitable for both beginners and advanced players. Our lessons cover essential aspects such as proper posture, embouchure, intonation, and air support. They are structured to progress at the student's own pace, targeting their individual goals. As the instructor, I commit to providing customized guidance and feedback. This approach aims to enhance technique, musicality, and performance within a supportive and positive learning environment. Lessons include interactive live video sessions for demonstrations, explanations, and Q&A. We also engage in discussions on musical interpretation and practice strategies, enriching the learning experience. No previous experience is required, as each session adapts to the learner's current skill level.</p>
                        `;
                        break;
                    case 'voice2':
                        detailsContent = `
                            <div style="text-align: center; margin-bottom: 10px;">
                            <p style="margin: 5px 0;"><strong>Lesson Pricing:</strong></p>
                            <p style="margin: 3px 0; font-size: smaller;"><i>For those concerned about affordability, I offer sliding scale pricing options to accommodate various budgets.</i></p>
                            <p style="margin: 3px 0; font-size: smaller;"><i>Please message me to learn more.</i></p>
                            <p style="margin: 5px 0;">$30 for 30 minutes</p>
                            <p style="margin: 5px 0;">$45 for 45 minutes</p>
                            <p style="margin: 5px 0;">$60 for an hour</p>
                            </div>
                            <p>In these voice training sessions, you'll master masculine or feminine voice modulation, tailored to your preference. Additionally, you'll learn how to apply these modulation techniques across a range of vocal expressions, such as singing and shouting. Through personalized guidance and targeted exercises, you'll develop a voice that authentically represents your true self.</p>
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
                            <p>Want to understand the language behind the music you love? These music theory lessons will take you from the basics of notes and rhythm to how chords work together and build the structure of a song. You'll learn to read and write music, train your ear to pick out melodies and harmonies, and analyze your favorite pieces. Whether you're a player, composer, or simply a music enthusiast, this course will equip you with the knowledge to deepen your appreciation and enjoyment of music. Lessons include interactive live video sessions for demonstrations, explanations, and Q&A. We also engage in discussions on musical interpretation and practice strategies, enriching the learning experience. No previous experience is required, as each session adapts to the learner's current skill level.</p>
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
                             <p>In these music production lessons, We'll dive deep into the world of music production using FL Studio, starting with the fundamentals. Learn how to produce engaging beats and melodies using virtual instruments and samples. We'll explore arrangement techniques to make your tracks shine, and master the art of mixing and mastering for a professional polish. Lessons include interactive live video sessions for demonstrations, explanations, and Q&A. No previous experience is required, as each session adapts to the learner's current skill level.</p>
                        `;
                        break;
                    case 'customProduction':
                        detailsContent = `
                            <div style="text-align: center; margin-bottom: 10px;">
                            <p style="margin: 5px 0;"><strong>Contact me for pricing information</strong></p>
                            </div>
                            <p>Need some music made? I offer comprehensive music production across genres - EDM, ballads, soundtracks, demos, you name it. Whether you're crafting a brand identity or an artist wanting to bring your music to life, I excel at translating your ideas into powerful music. I handle everything from vocals to mixing and mastering. Let's collaborate and make your music a reality!</p>
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




