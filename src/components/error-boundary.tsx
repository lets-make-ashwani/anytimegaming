"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertOctagon, RefreshCw } from "lucide-react";
import { logger } from "@/lib/logger";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    logger.error("ErrorBoundary caught an unhandled client error", {
      error,
      errorInfo,
    });
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-red-500/20 bg-[#111111] p-8 text-center">
          <div className="mb-4 rounded-full bg-red-500/10 p-4 text-[#FF003C] animate-pulse-slow">
            <AlertOctagon size={48} />
          </div>
          <h3 className="font-display text-2xl font-bold tracking-tight text-white">
            System Defect Detected
          </h3>
          <p className="mt-2 max-w-md text-sm text-[#9CA3AF]">
            An unexpected error interrupted the connection grid. Try reloading the portal interface.
          </p>
          {this.state.error && (
            <div className="mt-4 rounded bg-black/40 p-2 text-left font-mono text-xs text-red-400 max-w-lg overflow-auto">
              {this.state.error.message}
            </div>
          )}
          <button
            onClick={this.handleReset}
            className="mt-6 flex items-center gap-2 rounded-2xl bg-[#FF003C] px-6 py-3 font-semibold text-white shadow-[0_0_15px_rgba(255,0,60,0.4)] transition-all hover:bg-[#ff1f54] hover:shadow-[0_0_25px_rgba(255,0,60,0.6)] active:scale-95"
          >
            <RefreshCw size={18} />
            Reboot Interface
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
