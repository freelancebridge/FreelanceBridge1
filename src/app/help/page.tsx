export default function Help() {
    return (
        <div className="bg-indigo-50 min-h-[calc(100vh-64px)] py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-sm border border-purple-100 p-12 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Help & Support</h1>
                    <p className="text-xl text-gray-700 mb-8">Got a question? We're here to help.</p>
                    <div className="text-left space-y-6">
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">How do I get paid?</h3>
                            <p className="text-gray-600">Payments are securely processed when a project milestone is met and approved by the client.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">Can I change my role?</h3>
                            <p className="text-gray-600">Currently, accounts are either Client or Freelancer. You will need a new account to switch roles.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
