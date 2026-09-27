import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import LaunchManifest from './components/LaunchManifest'
import TelemetryTable from './components/TelemetryTable'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TelemetryTable />
        <LaunchManifest />
      </main>
      <Footer />
    </div>
  )
}

export default App
