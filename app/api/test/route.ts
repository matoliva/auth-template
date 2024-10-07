import { PrismaClient, User, PaymentPlan, Purchase } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(): Promise<Response> {
  try {
    // Create a new user
    const newUser: User = await prisma.user.create({
      data: {
        email: "testuser@example.com",
        name: "Test User",
      },
    });

    // Create a payment plan
    const newPlan: PaymentPlan = await prisma.paymentPlan.create({
      data: {
        name: "12 Months Plan",
        total_duration_in_months: 12,
        payment_frequency: "Monthly",
        interest_rate: 0,
      },
    });

    // Create a purchase for the user with the payment plan
    const newPurchase: Purchase = await prisma.purchase.create({
      data: {
        description: "Laptop",
        amount: 1200.0,
        purchase_date: new Date(),
        user_id: newUser.id,
        plan_id: newPlan.id,
      },
    });

    // Fetch users and their purchases
    const usersWithPurchases = await prisma.user.findMany({
      include: {
        purchases: true,
      },
    });

    // Return the created data and the read results
    return new Response(
      JSON.stringify({ newUser, newPlan, newPurchase, usersWithPurchases }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Something went wrong" }),
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// To run it http://localhost:3000/api/test