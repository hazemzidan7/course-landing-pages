import type { Course } from '@/lib/courses/types';

export const programmingFundamentalsCourse: Course = {
  id: 'programming-fundamentals',
  slug: 'programming-fundamentals',
  categoryId: 'technology',
  status: 'active',
  meta: {
    title: 'Programming Fundamentals Diploma — EDUZAH',
    description: 'Build a strong computer science and programming foundation before specializing in any software development track.',
  },
  hero: {
    badge: 'Technology Program',
    headline: 'Programming Fundamentals Diploma',
    subheadline: 'Build a strong computer science and programming foundation before specializing in any software development track.',
    image: { src: '/courses/programming-fundamentals/hero.png', alt: 'EDUZAH Programming Fundamentals Diploma' },
  },
  quickInfo: {
    duration: '16 Weeks · 100 Hours',
    format: 'Online / Offline',
    language: 'English',
  },
  curriculum: [
    {
      title: 'Programming Foundations (C++)',
      description: 'Programming Fundamentals, C++, Problem Solving',
    },
    {
      title: 'Object-Oriented Programming',
      description:
        'Object-Oriented Programming, Classes, Objects, UML Class Diagram, Polymorphism, Overloading vs Overriding, Abstract Classes, Encapsulation, Abstraction, Constructors, Inheritance, Operator Overloading, Static Members, Exception Handling, OOP Project',
    },
    {
      title: 'Algorithms & Data Structures',
      description:
        'Algorithms, Searching Algorithms, Linear Search, Binary Search, Sorting Algorithms, Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Big O, DFS, BFS, Recursion, Data Structures',
    },
    {
      title: 'Database Systems',
      description: 'Database Systems',
    },
    {
      title: 'Git & Version Control',
      description: 'Git, GitHub, Version Control',
    },
    {
      title: 'Projects',
      description:
        'Basic C++ and OOP Project, Data Structure and Algorithm Project, Database System Project, Git & GitHub Practical Assignments, Final Capstone Project',
    },
    {
      title: 'Bonus Topics',
      description: 'Unit Testing Overview, Design Patterns Overview, Agile Fundamentals, SOLID Principles, Python Basics',
    },
  ],
  skills: ['C++', 'Object-Oriented Programming', 'Data Structures & Algorithms', 'Git & GitHub', 'Database Systems', 'Problem Solving'],
  gallery: [
    { src: '/courses/programming-fundamentals/gallery-1.jpeg', alt: 'EDUZAH Programming Fundamentals training session' },
    { src: '/courses/programming-fundamentals/gallery-2.jpeg', alt: 'EDUZAH Programming Fundamentals workshop' },
    { src: '/courses/programming-fundamentals/gallery-3.jpeg', alt: 'EDUZAH Programming Fundamentals lab session' },
  ],
  pricing: {
    currency: 'EGP',
    fullPrice: 4000,
    originalPrice: 6000,
    installmentCount: 3,
    installmentAmount: 1333,
    currentOffer: { label: 'Special Offer', discountPercent: 33 },
    fullPaymentDiscount: 300,
  },
};
