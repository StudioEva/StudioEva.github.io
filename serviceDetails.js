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
                            <p>Service details will be available soon.</p>
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
                             <p>Service details will be available soon.</p>
                        `;
                        break;
                    case 'customProduction':
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




