import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { 
  ShoppingCart, 
  Heart, 
  Globe, 
  Shield, 
  Users, 
  CheckCircle, 
  Star,
  Menu,
  X
} from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  const products = [
    {
      id: 1,
      name: "Premium Mosquito Net",
      price: 25,
      image: "/api/placeholder/400/300",
      description: "Long-lasting insecticidal net, WHO approved",
      category: "nets"
    },
    {
      id: 2,
      name: "Travel Size Mosquito Spray",
      price: 15,
      image: "/api/placeholder/400/300",
      description: "DEET-free, natural protection for 8 hours",
      category: "spray"
    },
    {
      id: 3,
      name: "Malariaway Water Bottle",
      price: 20,
      image: "/api/placeholder/400/300",
      description: "Insulated bottle with malaria prevention tips",
      category: "merch"
    },
    {
      id: 4,
      name: "Awareness Wristband",
      price: 10,
      image: "/api/placeholder/400/300",
      description: "Silicone wristband supporting malaria prevention",
      category: "merch"
    }
  ]

  const addToCart = () => {
    setCartCount(prev => prev + 1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/logo.png" 
                alt="Malariaway Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Malariaway</h1>
                <p className="text-sm text-gray-600">Protecting Lives from Malaria</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors">Products</a>
              <a href="#mission" className="text-gray-700 hover:text-blue-600 transition-colors">Our Mission</a>
              <a href="#impact" className="text-gray-700 hover:text-blue-600 transition-colors">Impact</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="relative">
                <ShoppingCart className="h-4 w-4" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1">
                    {cartCount}
                  </Badge>
                )}
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors">Products</a>
              <a href="#mission" className="text-gray-700 hover:text-blue-600 transition-colors">Our Mission</a>
              <a href="#impact" className="text-gray-700 hover:text-blue-600 transition-colors">Impact</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Together We Can
            <span className="text-blue-600"> End Malaria</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join our mission to protect families across Africa with premium mosquito nets, 
            effective repellents, and life-saving education. Every purchase helps save lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Shop Now
            </Button>
            <Button size="lg" variant="outline">
              <Heart className="mr-2 h-5 w-5" />
              Learn About Our Impact
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">250K+</div>
              <div className="text-gray-600">Nets Distributed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">85K+</div>
              <div className="text-gray-600">Lives Protected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">42</div>
              <div className="text-gray-600">Communities Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Malaria Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium protection and merchandise that saves lives while raising awareness
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="all">All Products</TabsTrigger>
            <TabsTrigger value="nets">Mosquito Nets</TabsTrigger>
            <TabsTrigger value="spray">Repellents</TabsTrigger>
            <TabsTrigger value="merch">Merchandise</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <Shield className="h-16 w-16 text-gray-400" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                    <Button size="sm" onClick={addToCart}>
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="nets" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.filter(p => p.category === 'nets').map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <Shield className="h-16 w-16 text-gray-400" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                    <Button size="sm" onClick={addToCart}>
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="spray" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.filter(p => p.category === 'spray').map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <Shield className="h-16 w-16 text-gray-400" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                    <Button size="sm" onClick={addToCart}>
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="merch" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.filter(p => p.category === 'merch').map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <Shield className="h-16 w-16 text-gray-400" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                    <Button size="sm" onClick={addToCart}>
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </section>

      {/* Mission Section */}
      <section id="mission" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Malaria affects millions of people worldwide, particularly in Africa. 
                We're committed to providing life-saving mosquito nets, effective repellents, 
                and education to communities that need it most.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Quality Products</h3>
                    <p className="text-gray-600">WHO-approved nets and DEET-free repellents</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Direct Impact</h3>
                    <p className="text-gray-600">Every purchase directly supports families in need</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Education First</h3>
                    <p className="text-gray-600">Teaching communities about malaria prevention</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center">
              <Users className="h-24 w-24 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the difference we're making in communities across Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Community Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We work directly with local communities to distribute nets 
                and provide malaria education programs.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <CardTitle>Healthcare Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Partnering with local clinics to ensure proper treatment 
                and prevention education reaches everyone.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Star className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <CardTitle>Success Stories</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Communities report 95% reduction in malaria cases 
                after our intervention programs.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.png" alt="Malariaway" className="h-8 w-auto" />
                <span className="text-xl font-bold">Malariaway</span>
              </div>
              <p className="text-gray-400">
                Protecting lives from malaria through quality products and community impact.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Mosquito Nets</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Repellent Spray</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Water Bottles</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wristbands</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Impact Reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-gray-400 mb-2">support@malariaway.org</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Malariaway. All rights reserved. Saving lives, one net at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App