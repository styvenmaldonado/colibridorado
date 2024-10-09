import type { CostEventInterface } from "~/inteface/CostEventInterface";
import { client } from "./AmplifyDataClient";

 interface OrchestadorPaymentOptions {
    currency: "COP"|"USD"|"MXN"
 }

export const OrchestadorPayment = async (eventId: string, eventsUserId:string, userId: string, opt:OrchestadorPaymentOptions ) => {
  const { data: event } = await client.models.Events.get({
    id: eventId,
  });
  const { data: interviews } = await client.models.Interviews.list({
    filter: { userId: { eq: userId } },
  });
 
   const { data: eventUser } = await client.models.EventsUser.get({ id: eventsUserId });

  //Variable Mutable Body
  let body;

  //Search in Filed IsVerified Interviews Table
  const isVerifiedInterview = interviews
    .map((c) => c.isVerified)
    .includes(true);

  if (isVerifiedInterview) {
    //Search Cost Usertype
    //@ts-ignore
    const cost: CostEventInterface = event?.cost?.find((p) => p.id == eventUser?.rol);
    let amount_in_cents;

    if(opt.currency == "COP")  amount_in_cents = cost.cop * 100
    if(opt.currency == "MXN")  amount_in_cents = cost.mxn * 100
    if(opt.currency == "USD")  amount_in_cents = cost.usd * 100

    body = {
      name: event?.name, // Nombre del link de pago
      description: event?.description, // Descripción del pago
      single_use: false, // `false` current caso de que el link de pago pueda recibir múltiples transacciones APROBADAS o `true` si debe dejar de aceptar transacciones después del primer pago APROBADO
      collect_shipping: false, // Si deseas que el cliente inserte su información de envío current el checkout, o no
      redirect_url: "http://localhost:3000/payment-state", // URL donde será redirigido el cliente una vez termine el proceso de pago
      currency: opt.currency, //Únicamente está disponible pesos colombianos (COP) current el momento. En el futuro soportaremos mas monedas
      amount_in_cents, // Si el pago current por un monto especifico, si no lo incluyes el pagador podrá elegir el valor a pagar
    };
  }
  if (!isVerifiedInterview) {
    body = {
      name: "Entrevista: " + event?.name, // Nombre del link de pago
      description: event?.description, // Descripción del pago
      single_use: false, // `false` current caso de que el link de pago pueda recibir múltiples transacciones APROBADAS o `true` si debe dejar de aceptar transacciones después del primer pago APROBADO
      collect_shipping: false, // Si deseas que el cliente inserte su información de envío current el checkout, o no
      redirect_url: "http://localhost:3000/payment-state", // URL donde será redirigido el cliente una vez termine el proceso de pago
      currency: opt.currency, //Únicamente está disponible pesos colombianos (COP) current el momento. En el futuro soportaremos mas monedas
      amount_in_cents: 6000000, // Si el pago current por un monto especifico, si no lo incluyes el pagador podrá elegir el valor a pagar
    };
  }

  const res: any = await $fetch("https://sandbox.wompi.co/v1/payment_links", {
    method: "POST",
    headers: {
      Authorization: "Bearer prv_test_5c3HXUENPsGMxTOjmrotKwaHFu4Drf3S",
    },
    body,
  });

  return  `https://checkout.wompi.co/l/${
    res?.data?.id || "00000"
  }`;
};
