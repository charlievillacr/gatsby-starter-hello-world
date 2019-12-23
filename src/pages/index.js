import React from "react"
import Button from "../pages/components/Button"

export default () => (
    <div className="p-8">
        <button className="py-4 px-4 bg-blue-600 hover:bg-blue-700 rounded text-white">
            Button One
        </button>
        <p className="mt-8">
            <Button>Reusable Button</Button>
        </p>
        <p className="mt-8">
            <Button size="lg">Another one.. Large</Button>
        </p>
        <p className="mt-8">
            <Button size="xl">Another one.. Extra large</Button>
        </p>
    </div>

)