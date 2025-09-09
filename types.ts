
import type React from 'react';

export enum PersonaType {
  SME = 'SME',
  LargeCorporate = 'LargeCorporate',
  Industrial = 'Industrial',
  FleetOperator = 'FleetOperator',
  FacilityManager = 'FacilityManager',
}

export interface Persona {
  id: PersonaType;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export enum MessageRole {
  User = 'user',
  Model = 'model',
}

export interface Message {
  role: MessageRole;
  text: string;
}
