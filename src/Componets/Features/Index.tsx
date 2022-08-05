import FeatureCard from "./FeatureCard";

const Features = () => {
    return (
        <>
            <div className="min-h-screen w-full">
                <div className="flex flex-col lg:flex-row w-full lg:w-[80%] m-auto px-4 justify-between min-h-screen items-center">
                    <FeatureCard title="Encrypted data" text="All of Flint’s data exchange happens through SSL using TLS 1.2 and all your sensitive data is securely stored with AES-256 encryption." />
                    <FeatureCard title="Audited partners" text="Our business partners are financially audited at regular intervals, to keep a check on bankruptcy risk and fraud" />
                    <FeatureCard title="Robust KYC" text="Our KYC algorithm ensures the strictest identification checks at par with well-regulated instruments while making it easy for you." />
                </div>
            </div>
        </>
    )
}

export default Features;