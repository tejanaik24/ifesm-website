'use client';
import { motion } from 'framer-motion';

export const FlamePaths = (props: any) => (
  <>
    <motion.path
      d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.144-.224-4.098 2-6 3 2.5 3 5.5 3 5.5-.5 1.5 1 3 1 3a2.5 2.5 0 0 1 2.5 2.5 4.5 4.5 0 0 1-9 0Z"
      {...props}
    />
    <motion.path d="M12 19.5v.5" {...props} />
  </>
);

export const ShieldPaths = (props: any) => (
  <>
    <motion.path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" {...props} />
    <motion.path d="m9 12 2 2 4-4" {...props} />
  </>
);

export const CircuitPaths = (props: any) => (
  <>
    {/* Circuit lines */}
    <motion.path d="M 10 20 L 40 20 L 50 30 L 50 50" {...props} />
    <motion.path d="M 50 70 L 50 85 L 85 85" {...props} />
    <motion.path d="M 60 60 L 90 60" {...props} />
    {/* Gear center */}
    <motion.circle cx="50" cy="60" r="10" fill="none" {...props} />
    {/* Gear teeth */}
    <motion.path
      d="M 50 46 L 50 50 M 50 70 L 50 74 M 36 60 L 40 60 M 60 60 L 64 60 M 40 50 L 43 53 M 60 70 L 57 67 M 40 70 L 43 67 M 60 50 L 57 53"
      {...props}
    />
  </>
);

export const SmokePaths = (props: any) => (
  <>
    <motion.path d="M 35 90 C 25 70, 45 50, 35 10" {...props} />
    <motion.path d="M 50 90 C 65 65, 35 45, 50 10" {...props} />
    <motion.path d="M 65 90 C 55 75, 75 55, 65 10" {...props} />
  </>
);

export const BlueprintPaths = (props: any) => (
  <>
    {/* Corner brackets */}
    <motion.path d="M 15 25 L 15 15 L 25 15" {...props} />
    <motion.path d="M 75 15 L 85 15 L 85 25" {...props} />
    <motion.path d="M 15 75 L 15 85 L 25 85" {...props} />
    <motion.path d="M 75 85 L 85 85 L 85 75" {...props} />
    {/* Crosshair */}
    <motion.circle cx="50" cy="50" r="15" fill="none" {...props} />
    <motion.circle cx="50" cy="50" r="1.5" {...props} />
    <motion.path d="M 30 50 L 70 50" {...props} />
    <motion.path d="M 50 30 L 50 70" {...props} />
    {/* Dimension lines */}
    <motion.path d="M 20 8 L 80 8" {...props} />
    <motion.path d="M 20 4 L 20 12" {...props} />
    <motion.path d="M 80 4 L 80 12" {...props} />
    <motion.path d="M 92 20 L 92 80" {...props} />
    <motion.path d="M 88 20 L 96 20" {...props} />
    <motion.path d="M 88 80 L 96 80" {...props} />
  </>
);
