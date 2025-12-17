# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Build, Lint, and Test Commands
This repository is a framework for managing the development process of a Claude Code agent and does not contain traditional application code. Therefore, there are no conventional `build`, `lint`, or `test` commands in the typical software development sense (e.g., in `package.json`, `Makefile`, or other standard locations).

The scripts within the `.specify` directory are related to the agent's internal operations and development workflow (e.g., `update-agent-context.ps1`, `create-new-feature.ps1`, `setup-plan.ps1`). These are for agent management, not application development.

## High-Level Code Architecture and Structure

This codebase is structured around the **Spec-Driven Development (SDD)** paradigm, primarily designed to facilitate the operation and development of the Claude Code agent.

*   **Core Purpose:** The repository serves as the operational framework for an AI assistant specializing in SDD, guiding users and executing development tasks through a defined set of tools and processes.
*   **Key Directories and Their Roles:**
    *   `.claude/commands/`: Contains custom slash commands for the Claude agent, defined in markdown files (e.g., `sp.clarify.md`, `sp.tasks.md`, `sp.plan.md`). These extend the agent's interactive capabilities.
    *   `.specify/`: This is a central directory for "SpecKit Plus templates and scripts." It contains:
        *   `.specify/scripts/powershell/`: PowerShell scripts that handle various agent-specific operations, such as `update-agent-context.ps1`, `create-new-feature.ps1`, and `setup-plan.ps1`. These scripts automate parts of the SDD workflow.
        *   `.specify/memory/`: Includes `constitution.md`, which defines the project's foundational principles and code standards.
        *   `.specify/templates/`: Houses various markdown templates for key SDD artifacts, such as `checklist-template.md`, `phr-template.prompt.md` (for Prompt History Records), `plan-template.md`, `adr-template.md` (for Architectural Decision Records), and `spec-template.md`.
    *   `history/prompts/`: A directory for storing Prompt History Records (PHRs), which are detailed logs of user inputs and the assistant's key outputs, categorized by constitution, feature-specific, or general contexts.
    *   `history/adr/`: A directory for Architecture Decision Records, documenting significant architectural decisions with their reasoning and tradeoffs.
    *   `specs/<feature>/` (Inferred Structure): This refers to a logical grouping where feature-specific requirements (`spec.md`), architectural plans (`plan.md`), and testable tasks (`tasks.md`) would reside.

*   **Development Workflow (SDD):** The agent's workflow is heavily driven by prompts, generating PHRs for every user interaction, and suggesting ADRs when architecturally significant decisions are made. The emphasis is on structured documentation, explicit planning, and adherence to defined principles.
*   **No Direct Application Code:** The codebase does not appear to contain a traditional application's source code (e.g., Python, JavaScript, Java files for a deployable application). Instead, it's a meta-project focused on the operational and developmental processes of the Claude Code agent itself.

## Development Guidelines

### 1. Authoritative Source Mandate:
Agents MUST prioritize and use MCP tools and CLI commands for all information gathering and task execution. NEVER assume a solution from internal knowledge; all methods require external verification.

### 2. Execution Flow:
Treat MCP servers as first-class tools for discovery, verification, execution, and state capture. PREFER CLI interactions (running commands and capturing outputs) over manual file creation or reliance on internal knowledge.

### 3. Knowledge Capture (PHR) for Every User Input.
After completing requests, you **MUST** create a PHR (Prompt History Record). PHRs are routed under `history/prompts/` (constitution, feature-name, or general).

### 4. Explicit ADR suggestions
When significant architectural decisions are made, suggest documenting with: "📋 Architectural decision detected: <brief> — Document reasoning and tradeoffs? Run `/sp.adr <decision-title>`". Wait for user consent; never auto‑create the ADR.

### 5. Human as Tool Strategy
You MUST invoke the user for input when you encounter situations that require human judgment: ambiguous requirements, unforeseen dependencies, architectural uncertainty, or after completing major milestones.

## Default policies
- Clarify and plan first - keep business understanding separate from technical plan and carefully architect and implement.
- Do not invent APIs, data, or contracts; ask targeted clarifiers if missing.
- Never hardcode secrets or tokens; use `.env` and docs.
- Prefer the smallest viable diff; do not refactor unrelated code.
- Cite existing code with code references (start:end:path); propose new code in fenced blocks.
- Keep reasoning private; output only decisions, artifacts, and justifications.

### Execution contract for every request
1) Confirm surface and success criteria (one sentence).
2) List constraints, invariants, non‑goals.
3) Produce the artifact with acceptance checks inlined (checkboxes or tests where applicable).
4) Add follow‑ups and risks (max 3 bullets).
5) Create PHR in appropriate subdirectory under `history/prompts/`.
6) If plan/tasks identified decisions that meet significance, surface ADR suggestion text.

### Minimum acceptance criteria
- Clear, testable acceptance criteria included
- Explicit error paths and constraints stated
- Smallest viable change; no unrelated edits
- Code references to modified/inspected files where relevant

## Architect Guidelines (for planning)
As an expert architect, generate a detailed architectural plan for [Project Name] addressing Scope and Dependencies, Key Decisions and Rationale, Interfaces and API Contracts, Non-Functional Requirements (NFRs) and Budgets, Data Management and Migration, Operational Readiness, Risk Analysis and Mitigation, Evaluation and Validation, and Architectural Decision Record.

### Architecture Decision Records (ADR) - Intelligent Suggestion
After design/architecture work, test for ADR significance based on Impact, Alternatives, and Scope. If all true, suggest: "📋 Architectural decision detected: [brief-description]
   Document reasoning and tradeoffs? Run `/sp.adr [decision-title]`"

## Basic Project Structure
- `.specify/memory/constitution.md` — Project principles
- `specs/<feature>/spec.md` — Feature requirements
- `specs/<feature>/plan.md` — Architecture decisions
- `specs/<feature>/tasks.md` — Testable tasks with cases
- `history/prompts/` — Prompt History Records
- `history/adr/` — Architecture Decision Records
- `.specify/` — SpecKit Plus templates and scripts

## Code Standards
See `.specify/memory/constitution.md` for code quality, testing, performance, security, and architecture principles.
