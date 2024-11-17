# React Blog Application

A modern, interactive blog application built with React that allows users to create, view, and interact with blog posts.

## 🌟 Features

- **Interactive Post Cards**: Expandable post cards that show/hide content on click
- **Create New Posts**: User-friendly form with real-time character counting
- **Responsive Design**: Looks great on both desktop and mobile devices
- **Sort by Date**: Posts are automatically sorted with the newest first
- **Loading States**: Visual feedback during post submission
- **Form Validation**: Built-in validation for title and content length
- **Empty State Handling**: Graceful handling when no posts exist

## 🚀 Components

### Post Component
```jsx
- Individual post card display
- Expandable content view
- Shows title and date
- Click to expand/collapse functionality
```

### PostForm Component
```jsx
- Interactive form for creating new posts
- Real-time character counting
- Input validation
- Loading state during submission
- Clear visual feedback
```

### PostList Component
```jsx
- Displays all posts in a grid layout
- Sorts posts by date
- Shows post count
- Handles empty state with visual feedback
```

## 💻 Installation

1. Clone the repository:
```bash
git clone https://github.com/maheshparajuli/series-03.git
cd series-03
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

## 🔧 Usage

### Creating a New Post
```jsx
// Example usage of PostForm
<PostForm addPost={(title, content) => {
  // Handle adding new post
}} />
```

### Displaying Posts
```jsx
// Example usage of PostList
<PostList posts={[
  {
    id: 1,
    title: "Example Post",
    content: "Post content...",
    createdAt: "2024-11-17"
  }
]} />
```

## 📝 Props

### Post Component
```typescript
interface PostProps {
  post: {
    id: string | number;
    title: string;
    content: string;
    date: string;
  }
}
```

### PostForm Component
```typescript
interface PostFormProps {
  addPost: (title: string, content: string) => Promise<void>;
}
```

### PostList Component
```typescript
interface PostListProps {
  posts: Array<{
    id: string | number;
    title: string;
    content: string;
    createdAt: string;
  }>;
}
```

## 🎨 Styling

The application uses a combination of custom CSS and utility classes. Make sure to include the following CSS files:
- `PostForm.css`
- `PostList.css`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

