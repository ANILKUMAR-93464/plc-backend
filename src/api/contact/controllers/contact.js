'use strict';

/**
 * contact controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact.contact', ({ strapi }) => ({

    async create(ctx) {

        let { name, email, subject, message } = ctx.request.body;

        const contact = await strapi.entityService.create('api::contact.contact', {
            data: {
                name: name,
                email: email,
                subject: subject,
                message: message
            }
        });


        // Send notification email to admin
        try {
            await strapi.plugins['email'].services.email.send({
                to: 'admin@plc-consultants.com', // Replace with your admin email
                subject: '🔔 New Contact Inquiry - PLC Property Loss Consultants',
                html: `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <meta charset="utf-8">
                        <style>
                            body { 
                                font-family: 'Arial', sans-serif; 
                                line-height: 1.6; 
                                color: #333; 
                                margin: 0; 
                                padding: 0; 
                                background-color: #f4f4f4;
                            }
                            .container { 
                                max-width: 600px; 
                                margin: 0 auto; 
                                background: white; 
                                border-radius: 10px; 
                                overflow: hidden;
                                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                            }
                            .header { 
                                background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); 
                                padding: 30px; 
                                text-align: center; 
                                color: white; 
                            }
                            .header h1 { 
                                margin: 0; 
                                font-size: 24px; 
                                font-weight: bold;
                            }
                            .content { 
                                padding: 30px; 
                            }
                            .contact-info { 
                                background: #f8f9fa; 
                                padding: 20px; 
                                border-radius: 8px; 
                                margin: 20px 0; 
                                border-left: 4px solid #3b82f6;
                            }
                            .message-box { 
                                background: #fff3cd; 
                                padding: 20px; 
                                border-radius: 8px; 
                                margin: 20px 0;
                                border: 1px solid #ffeaa7;
                            }
                            .info-grid {
                                display: grid;
                                grid-template-columns: 1fr 1fr;
                                gap: 15px;
                                margin: 15px 0;
                            }
                            .info-item {
                                background: white;
                                padding: 12px;
                                border-radius: 6px;
                                border: 1px solid #e9ecef;
                            }
                            .button { 
                                background: #3b82f6; 
                                color: white; 
                                padding: 12px 25px; 
                                text-decoration: none; 
                                border-radius: 5px; 
                                display: inline-block; 
                                margin: 15px 0; 
                                font-weight: bold;
                            }
                            .footer { 
                                background: #1e293b; 
                                padding: 20px; 
                                text-align: center; 
                                color: #e2e8f0; 
                                font-size: 12px; 
                            }
                            .label {
                                font-weight: bold;
                                color: #3b82f6;
                                display: block;
                                margin-bottom: 5px;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <div class="header">
                                <h1>🏢 New Contact Inquiry</h1>
                                <p>PLC Property Loss Consultants</p>
                            </div>
                            
                            <div class="content">
                                <h2 style="color: #1e3a8a; margin-top: 0;">Hello Admin!</h2>
                                <p>You have received a new contact inquiry from a potential client.</p>
                                
                                <div class="contact-info">
                                    <h3 style="color: #3b82f6; margin-top: 0;">👤 Contact Details</h3>
                                    <div class="info-grid">
                                        <div class="info-item">
                                            <span class="label">Full Name</span>
                                            ${name}
                                        </div>
                                        <div class="info-item">
                                            <span class="label">Email Address</span>
                                            ${email}
                                        </div>
                                    </div>
                                    
                                    <div style="margin-top: 15px;">
                                        <span class="label">📋 Subject</span>
                                        <div style="background: white; padding: 10px; border-radius: 5px; margin-top: 5px;">
                                            ${subject}
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="message-box">
                                    <h3 style="color: #856404; margin-top: 0;">💬 Message Content</h3>
                                    <div style="background: white; padding: 15px; border-radius: 5px; border: 1px solid #ffeaa7;">
                                        ${message.replace(/\n/g, '<br>')}
                                    </div>
                                </div>
                                
                                <div style="background: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
                                    <h3 style="color: #1e40af; margin-top: 0;">⏰ Inquiry Details</h3>
                                    <p style="margin: 10px 0;">
                                        <strong>Received:</strong> ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
                                    </p>
                                </div>
                                
                                <div style="text-align: center; margin-top: 25px;">
                                    <p>View and manage this inquiry in your admin panel:</p>
                                    <a href="${process.env.ADMIN_BASE_URL || 'http://localhost:1337'}/admin/content-manager/collectionType/api::contact.contact" 
                                       class="button">
                                        📋 View in Admin Panel
                                    </a>
                                </div>
                                
                                <div style="margin-top: 25px; padding: 15px; background: #fef3c7; border-radius: 8px; border: 1px solid #fbbf24;">
                                    <h4 style="color: #92400e; margin-top: 0;">⚠️ Action Required</h4>
                                    <p style="margin: 5px 0;">Please respond to this inquiry within <strong>24-48 hours</strong> to maintain excellent client service standards.</p>
                                </div>
                            </div>
                            
                            <div class="footer">
                                <p><strong>PLC Property Loss Consultants</strong></p>
                                <p><em>"Expert property loss assessment and consulting services"</em></p>
                                <p>This is an automated notification from your contact management system.</p>
                                <p>© ${new Date().getFullYear()} PLC Property Loss Consultants. All rights reserved.</p>
                            </div>
                        </div>
                    </body>
                    </html>
                `,
            });

            console.log('Admin notification sent for contact inquiry from:', name);

        } catch (emailError) {
            console.error('Failed to send admin notification:', emailError);
            // Contact is still saved even if email fails
        }


        //


        return { data: contact };
    
    },

    async find(ctx) {

        const { page = 1, pageSize = 10 } = ctx.query;

        const pageNum = Number(page);
        const pageSizeNum = Number(pageSize);

        const data = await strapi.entityService.findMany('api::contact.contact', {
            sort: 'createdAt:desc',
            limit: pageSizeNum,
            start: (pageNum - 1) * pageSizeNum,
        })

        const total = await strapi.entityService.count('api::contact.contact', { filters: {} });

        return {
            data,
            meta: {
                pagination: {
                    page: pageNum,
                    pageSize: pageSizeNum,
                    pageCount: Math.ceil(total / pageSizeNum),
                    total,
                },
            },
        }
    }
}));