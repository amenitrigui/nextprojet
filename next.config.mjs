/** @type {import('next').NextConfig}*/
const nextConfig = { 
    images: { 
        domains: ["res.cloudinary.com","hamedia.b-cdn.net","www.tuniscope.com","c8.alamy.com","encrypted-tbn0.gstatic.com","www.codeur.com"]
    },
    env:{
        API_URL : "http://localhost:3001/api",
        SECRET : "secret",
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:"pk_test_51PGHpSBBQkUJybbGtnrDKtMAa7xnVQRWKs2Tg52Js9xsR8VSo03SDBkC5uj5mD9oLLGxIwkm5zirHYTc27RFILaS003BiZSOJi",
        STRIPE_SECRET_KEY:"sk_test_51PGHpSBBQkUJybbGT9IXRuvdhN67xuHnjJkiCcnhcELt4yEU4fc8tDGYCaqOSVnF706dl8t3KQgu8tcVcPcaWlKm00RCNskgQr",
        NEXT_PUBLIC_URL:"http://localhost:3000"

        }
};

export default nextConfig;
