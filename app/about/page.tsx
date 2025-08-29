import React from 'react'

export default function About() {
  return (
    <div className="container">
      <h1 className="text-3xl font-semibold">About Me</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-1">
          <img src="/static/headshot.jpg" alt="Headshot" className="w-48 h-48 object-cover rounded-full" />
        </div>
        <div className="md:col-span-2">
          <p className="text-gray-700">TODO</p>
        </div>
      </div>
    </div>
  )
}
