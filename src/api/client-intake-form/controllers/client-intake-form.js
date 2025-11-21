'use strict';

/**
 * client-intake-form controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::client-intake-form.client-intake-form',({ strapi }) => ({

    async create(ctx) {

        let { full_name, email, phone, property_address, type_of_damage, insurance_comapany, policy_number, details_of_damage } = ctx.request.body;

        const client_intake = await strapi.entityService.create('api::client-intake-form.client-intake-form', {
            data: {
                full_name: full_name,
                email: email,
                phone: phone,
                property_address: property_address,
                type_of_damage: type_of_damage,
                insurance_comapany: insurance_comapany,
                policy_number: policy_number,
                details_of_damage: details_of_damage
            }
        });


        // Send notification email to admin

            // Send admin notification email
    try {
        await strapi.plugins['email'].services.email.send({
            to: 'admin@plc-consultants.com', // Replace with your admin email
            subject: '🚨 New Client Intake Form - URGENT - PLC Property Loss Consultants',
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
                            max-width: 650px; 
                            margin: 0 auto; 
                            background: white; 
                            border-radius: 10px; 
                            overflow: hidden;
                            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                        }
                        .header { 
                            background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); 
                            padding: 30px; 
                            text-align: center; 
                            color: white; 
                        }
                        .header h1 { 
                            margin: 0; 
                            font-size: 26px; 
                            font-weight: bold;
                        }
                        .urgent-banner {
                            background: #fef2f2;
                            border-left: 5px solid #dc2626;
                            padding: 15px;
                            margin: 20px 30px;
                            border-radius: 5px;
                        }
                        .content { 
                            padding: 30px; 
                        }
                        .section {
                            background: #f8f9fa;
                            padding: 20px;
                            border-radius: 8px;
                            margin: 20px 0;
                            border-left: 4px solid #3b82f6;
                        }
                        .section-title {
                            color: #1e3a8a;
                            font-size: 18px;
                            font-weight: bold;
                            margin: 0 0 15px 0;
                            display: flex;
                            align-items: center;
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
                        .info-item-full {
                            background: white;
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid #e9ecef;
                            margin: 10px 0;
                        }
                        .label {
                            font-weight: bold;
                            color: #3b82f6;
                            display: block;
                            margin-bottom: 5px;
                            font-size: 13px;
                        }
                        .value {
                            color: #1f2937;
                            font-size: 15px;
                        }
                        .damage-box {
                            background: #fef3c7;
                            padding: 20px;
                            border-radius: 8px;
                            margin: 20px 0;
                            border: 2px solid #f59e0b;
                        }
                        .insurance-box {
                            background: #dbeafe;
                            padding: 20px;
                            border-radius: 8px;
                            margin: 20px 0;
                            border: 2px solid #3b82f6;
                        }
                        .button { 
                            background: #dc2626; 
                            color: white; 
                            padding: 14px 28px; 
                            text-decoration: none; 
                            border-radius: 6px; 
                            display: inline-block; 
                            margin: 15px 0; 
                            font-weight: bold;
                            font-size: 16px;
                        }
                        .footer { 
                            background: #1e293b; 
                            padding: 25px; 
                            text-align: center; 
                            color: #e2e8f0; 
                            font-size: 12px; 
                        }
                        .priority-high {
                            background: #fee2e2;
                            color: #991b1b;
                            padding: 8px 15px;
                            border-radius: 20px;
                            font-weight: bold;
                            display: inline-block;
                            margin: 10px 0;
                        }
                        .timestamp {
                            background: #f1f5f9;
                            padding: 12px;
                            border-radius: 6px;
                            text-align: center;
                            margin: 20px 0;
                            font-size: 14px;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>🚨 NEW CLIENT INTAKE FORM</h1>
                            <p style="margin: 5px 0; font-size: 16px;">Property Loss Claim Submission</p>
                            <div class="priority-high">HIGH PRIORITY - IMMEDIATE ACTION REQUIRED</div>
                        </div>
                        
                        <div class="urgent-banner">
                            <strong style="color: #dc2626; font-size: 16px;">⚠️ URGENT:</strong>
                            <p style="margin: 5px 0 0 0; color: #991b1b;">A new client has submitted a property loss claim. Please review and respond within 2-4 hours.</p>
                        </div>
                        
                        <div class="content">
                            <h2 style="color: #1e3a8a; margin-top: 0;">Client Information</h2>
                            
                            <!-- Client Details Section -->
                            <div class="section">
                                <div class="section-title">👤 Personal Details</div>
                                <div class="info-grid">
                                    <div class="info-item">
                                        <span class="label">Full Name</span>
                                        <span class="value">${full_name}</span>
                                    </div>
                                    <div class="info-item">
                                        <span class="label">Phone Number</span>
                                        <span class="value">${phone}</span>
                                    </div>
                                </div>
                                <div class="info-item-full">
                                    <span class="label">Email Address</span>
                                    <span class="value">${email}</span>
                                </div>
                            </div>

                            <!-- Property Information -->
                            <div class="section">
                                <div class="section-title">🏠 Property Information</div>
                                <div class="info-item-full">
                                    <span class="label">Property Address</span>
                                    <span class="value">${property_address}</span>
                                </div>
                            </div>

                            <!-- Insurance Information -->
                            <div class="insurance-box">
                                <h3 style="color: #1e40af; margin-top: 0; display: flex; align-items: center;">
                                    🛡️ Insurance Information
                                </h3>
                                <div class="info-grid">
                                    <div class="info-item">
                                        <span class="label">Insurance Company</span>
                                        <span class="value">${insurance_comapany}</span>
                                    </div>
                                    <div class="info-item">
                                        <span class="label">Policy Number</span>
                                        <span class="value">${policy_number}</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Damage Information -->
                            <div class="damage-box">
                                <h3 style="color: #92400e; margin-top: 0; display: flex; align-items: center;">
                                    ⚠️ Damage Information
                                </h3>
                                <div class="info-item-full" style="background: white; margin-bottom: 15px;">
                                    <span class="label">Type of Damage</span>
                                    <span class="value" style="font-weight: 600; color: #dc2626; font-size: 16px;">
                                        ${type_of_damage}
                                    </span>
                                </div>
                                <div class="info-item-full" style="background: white;">
                                    <span class="label">Detailed Description</span>
                                    <div class="value" style="margin-top: 8px; line-height: 1.6;">
                                        ${details_of_damage.replace(/\n/g, '<br>')}
                                    </div>
                                </div>
                            </div>

                            <!-- Timestamp -->
                            <div class="timestamp">
                                <strong>📅 Submission Date:</strong> ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                <br>
                                <strong>🕐 Time:</strong> ${new Date().toLocaleTimeString('en-US')}
                            </div>

                            <!-- Action Buttons -->
                            <div style="text-align: center; margin: 30px 0;">
                                <p style="font-size: 16px; color: #1f2937; margin-bottom: 15px;">
                                    <strong>View complete details in your admin panel:</strong>
                                </p>
                                <a href="${process.env.ADMIN_BASE_URL || 'http://localhost:1337'}/admin/content-manager/collectionType/api::client-intake-form.client-intake-form" 
                                   class="button">
                                    📋 Open Client Intake Form
                                </a>
                            </div>

                            <!-- Contact Client -->
                            <div style="background: #ede9fe; padding: 20px; border-radius: 8px; border: 2px solid #8b5cf6; text-align: center;">
                                <h3 style="color: #6b21a8; margin-top: 0;">📞 Quick Contact</h3>
                                <p style="margin: 10px 0;">
                                    <strong>Email:</strong> <a href="mailto:${email}" style="color: #7c3aed; text-decoration: none;">${email}</a>
                                </p>
                                <p style="margin: 10px 0;">
                                    <strong>Phone:</strong> <a href="tel:${phone}" style="color: #7c3aed; text-decoration: none;">${phone}</a>
                                </p>
                            </div>
                        </div>

                        <div class="footer">
                            <p><strong>PLC PROPERTY LOSS CONSULTANTS</strong></p>
                            <p style="margin: 10px 0;"><em>"Expert Property Loss Assessment & Claims Management"</em></p>
                            <p style="margin: 15px 0; padding-top: 15px; border-top: 1px solid #475569;">
                                This is an automated urgent notification from your Client Intake Management System.
                            </p>
                            <p style="color: #fca5a5; font-weight: bold;">
                                ⏰ Time-Sensitive: Please respond to this client within 2-4 hours
                            </p>
                            <p style="margin-top: 15px;">
                                © ${new Date().getFullYear()} PLC Property Loss Consultants. All rights reserved.
                            </p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        });

        console.log('Admin notification sent for client intake form from:', full_name);

    } catch (emailError) {
        console.error('Failed to send admin notification:', emailError);
        // Client intake is still saved even if email fails
    }
        //

        return { data: client_intake };
    
    },

    async find(ctx) {

        const { page = 1, pageSize = 10 } = ctx.query;

        const pageNum = Number(page);
        const pageSizeNum = Number(pageSize);

        const data = await strapi.entityService.findMany('api::client-intake-form.client-intake-form', {
            sort: 'createdAt:desc',
            limit: pageSizeNum,
            start: (pageNum - 1) * pageSizeNum,
        })

        const total = await strapi.entityService.count('api::client-intake-form.client-intake-form', { filters: {} });

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