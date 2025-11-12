# KeyZas

**KeyZas** is a web application that helps language communities create functional keyboards for their own languages without relying on external experts. It features **automatic character extraction**, **keyboard recommendations**, and a **real-time 3D customizer** built on KeySim by Carson Britt and other contributors.

---

## Key Features

- Extract unique characters from sample text automatically.  
- Suggest existing keyboards as starting points using coverage and overlap metrics.  
- Customize layouts interactively with a 3D visualizer.  
- Scrollable results box and downloadable JSON outputs.  
- Reset and run multiple analyses easily.  

---

## How It Works

### 1. Extract Character Set
Identify all unique characters in a text sample.  

### 2. Find Keyboard Matches
Compare against 200+ Microsoft layouts and rank top suggestions.  

### 3. 3D Customization
Adjust key positions, add/remove characters, and see changes live in a 3D interactive model.  

---

## Usage

1. Paste text or upload a file.  
2. Click **Analyze**.  
3. Scroll through the results.  
4. Customize the keyboard with the 3D visualizer.  
5. Download results as JSON.  
6. Click **Run New Analysis** to start over.  

---


## Tech Stack

- **Frontend:** React, Next.js  
- **Backend:** Next.js API routes  
- **Styling:** CSS with gradients, shadows, and 3D effects  
- **3D Visualizer:** Built on KeySim  

---

## Contributing

1. Fork and create a branch.  
2. Make changes and commit.  
3. Push and open a Pull Request.  

> ⚠️ Respect KeySim’s license when working on the 3D visualizer.

---

## License

MIT License © 2025

