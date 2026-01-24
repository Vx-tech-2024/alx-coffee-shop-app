## Coffee Ordering App (React Native)

A mobile coffee ordering application built with React Native.
The app allows users to browse drinks, view details, place an order, and track delivery — all using a simple state-based navigation approach.

### Features

Home screen with coffee listings

Drink detail screen

Order screen with delivery/pickup options

Delivery tracking screen (map view)

Custom UI styling based on a coffee app design

State-driven screen navigation (no navigation library)

### Tech Stack

React Native

TypeScript

Expo

Local assets (images)

Custom state-based navigation

### Navigation Approach

Instead of using react-navigation, the app uses a manual navigation system powered by React state.

const [screen, setScreen] = useState<
  "onboarding" | "home" | "detail" | "order" | "delivery"
>("home");


Each screen receives:

setScreen → to trigger navigation

currentScreen → to highlight active UI (footer)

This helped me understand navigation logic deeply before introducing libraries.

### Component Structure
components/
├── HomeScreen.tsx
├── DetailCard.tsx
├── OrderScreen.tsx
├── OrderCard.tsx
├── DeliveryScreen.tsx
├── Footer.tsx
data/
├── detailedDrink.ts
interfaces/
├── Drink.ts

### Development Process

UI-first approach

Built static layouts based on design reference

Focused on spacing, alignment, and typography

Data modeling

Created Drink and DrinkDetail interfaces

Used local mock data for drinks

Component breakdown

Extracted reusable UI into components (cards, footer)

Passed data through props

Navigation logic

Controlled screen rendering from a single state

Passed setScreen down to child components

Used button presses to trigger navigation

Testing on real device

Recorded app navigation using Redmi A10 screen recorder

Adjusted layouts based on real screen behavior

### Challenges Faced & Solutions
1. Navigation without React Navigation
Problem:
Buttons were not navigating between screens.

2. TouchableOpacity not responding
Problem:
Buttons appeared clickable but did nothing.

3. Layout breaking on real device
Problem:
UI looked fine in emulator but misaligned on phone.

4. Images not showing
Problem:
Icons and images were not rendering.


### Demo

A screen recording of the app navigating through:

Home → Detail → Order → Delivery
was captured using the Redmi A10 built-in screen recorder.

### What I Learned

How screen navigation works under the hood

Proper prop drilling and state control

Mobile layout debugging on real devices

Importance of small UI details in user experience

Writing maintainable, readable React Native components

### Future Improvements

Replace manual navigation with react-navigation

Add quantity increment/decrement logic

Persist order data

Add animations and transitions

Connect to a real backend API

👤 Author

Joel  George
Mathematics & Computer Science Student
React Native & Frontend Developer