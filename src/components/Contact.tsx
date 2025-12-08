import {Mail, MapPin, Phone} from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Travaillons Ensemble
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Un projet en tête ? Une question ? N'hésitez pas à me contacter, je serais ravi d'échanger avec
                        vous
                    </p>
                </div>

                <div className="row-auto justify-items-center">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Contactez-moi directement</h3>

                        <div className="space-y-6 mb-8">
                            <div className="flex items-center space-x-4">
                                <div
                                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                                    <Mail size={20}/>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Email</p>
                                    <a href="mailto:gabin.bloquet.pro@gmail.com"
                                       className="text-blue-600 hover:text-blue-700 transition-colors">
                                        gabin.bloquet.pro@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div
                                    className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white">
                                    <Phone size={20}/>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Téléphone</p>
                                    <a href="tel:+33123456789"
                                       className="text-blue-600 hover:text-blue-700 transition-colors">
                                        +33 7 62 69 93 16
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div
                                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white">
                                    <MapPin size={20}/>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Localisation</p>
                                    <p className="text-gray-600">Lille, France</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;